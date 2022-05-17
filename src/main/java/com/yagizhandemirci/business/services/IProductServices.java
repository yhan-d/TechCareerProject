package com.yagizhandemirci.business.services;

import com.yagizhandemirci.business.dto.ProductDto;
import com.yagizhandemirci.data.entity.ProductEntity;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface IProductServices {

    public ProductDto EntityToDto(ProductEntity productEntity);
    public ProductEntity DtoToEntity(ProductDto productDto);

    public ProductDto createProduct(ProductDto productDto);
    public List<ProductDto> getAllProducts();
    public ResponseEntity<ProductDto> getProductById(Long id) throws Throwable;
    public ResponseEntity<ProductDto> updateProduct(Long id, ProductDto productDto) throws Throwable;
    public ResponseEntity<Map<String,Boolean>> deleteProduct(Long id);
}
