package com.yagizhandemirci.ui.rest.impl;

import com.yagizhandemirci.business.dto.ProductDto;
import com.yagizhandemirci.business.services.IProductServices;
import com.yagizhandemirci.ui.rest.IProductRestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1")
public class ProductRestController implements IProductRestController {

    @Autowired
    IProductServices productServices;


    //ROOT
    //http://localhost:8080/api/v1
    //http://localhost:8080/api/v1/index
    @GetMapping({"/", "/index"})
    public String getRoot(){
        return "index";
    }

    //http://localhost:8080/api/v1/products
    @Override
    @PostMapping("/products")
    public ProductDto createProduct(ProductDto productDto) {
       productServices.createProduct(productDto);
       return productDto;
    }

    @Override
    @GetMapping("/products")
    public List<ProductDto> getAllProducts() {
        return productServices.getAllProducts();
    }


    //http://localhost:8080/api/v1/products/1
    @Override
    @GetMapping("/products/{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable(name = "id")  Long id) throws Throwable {
        ResponseEntity<ProductDto> entity= productServices.getProductById(id);
        return entity;
    }

    //http://localhost:8080/api/v1/produts/1
    @Override
    @PutMapping("/products/{id}")
    public ResponseEntity<ProductDto> updateProduct(Long id, ProductDto productDto) throws Throwable {
        ResponseEntity<ProductDto> entity= productServices.getProductById(id);
        productServices.updateProduct(id,productDto);
        return ResponseEntity.ok(productDto);
    }

    //http://localhost:8080/api/v1/products/1
    @Override
    @DeleteMapping("/products/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable(name = "id") Long id) {
        productServices.deleteProduct(id);
        Map<String,Boolean> response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
