package com.yagizhandemirci.business.services.impl;

import com.yagizhandemirci.business.dto.ProductDto;
import com.yagizhandemirci.business.services.IProductServices;
import com.yagizhandemirci.data.entity.ProductEntity;
import com.yagizhandemirci.data.repository.IProductRepository;
import com.yagizhandemirci.exception.ResourceNotFoundException;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Service
@Log4j2
public class ProductServicesImpl implements IProductServices {

    @Autowired
    IProductRepository productRepository;

    @Autowired
    ModelMapper modelMapper;


    @Override
    public ProductDto EntityToDto(ProductEntity productEntity) {
        ProductDto productDto = modelMapper.map(productEntity,ProductDto.class);
        return productDto;
    }

    @Override
    public ProductEntity DtoToEntity(ProductDto productDto) {
        ProductEntity productEntity = modelMapper.map(productDto,ProductEntity.class);
        return productEntity;
    }

    //http://localhost:8080/save/employees
    @Override
    @PostMapping("/save/products")
    public ProductDto createProduct(ProductDto productDto) {
        ProductEntity productEntity = DtoToEntity(productDto);
        productRepository.save(productEntity);
        log.info("Product Eklendi");
        return productDto;
    }

    //http://localhost:8080/list/products
    @Override
    @GetMapping("list/products")
    public List<ProductDto> getAllProducts() {
        List<ProductDto> dtoList = new ArrayList<>();
        Iterable<ProductEntity> list = productRepository.findAll();
        for (ProductEntity productEntity: list) {
            ProductDto productDto = EntityToDto(productEntity);
            dtoList.add(productDto);
        }
        return dtoList;
    }

    //http://localhost:8080/find/products/1
    @Override
    @GetMapping("/find/products/{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable(name="id") Long id) throws Throwable {
       ProductEntity productEntity = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + id));
       ProductDto productDto = EntityToDto(productEntity);
        return ResponseEntity.ok(productDto);
    }

    @Override
    @PutMapping("update/products/{id}")
    public ResponseEntity<ProductDto> updateProduct(@PathVariable(name = "id") Long id, @RequestBody ProductDto productDto) throws Throwable {
        ProductEntity productEntity = DtoToEntity(productDto);
        ProductEntity findProductEntity = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + id));

        findProductEntity.setProductName(productEntity.getProductName());
        findProductEntity.setProductUnitPrice(productEntity.getProductUnitPrice());
        findProductEntity.setProductDescription(productEntity.getProductDescription());
        findProductEntity.setProductPhoto(productEntity.getProductPhoto());
        ProductEntity pEntity = productRepository.save(findProductEntity);
        ProductDto pDto = EntityToDto(pEntity);
        return ResponseEntity.ok(pDto);
    }

    //http://localhost:8080/delete/products/1
    @Override
    @DeleteMapping("/delete/products/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(Long id) {
        ProductEntity entityFind=
                productRepository.
                        findById(id)
                        .orElseThrow(()->new ResourceNotFoundException("Product not found with id " + id));

        productRepository.delete(entityFind);
        Map<String,Boolean> response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }
}
