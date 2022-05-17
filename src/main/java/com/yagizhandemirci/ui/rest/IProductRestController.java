package com.yagizhandemirci.ui.rest;

import com.yagizhandemirci.business.dto.ProductDto;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface IProductRestController {
    public ProductDto createProduct(ProductDto productDto);
    public List<ProductDto> getAllProducts();
    public ResponseEntity<ProductDto> getProductById(Long id) throws Throwable;
    public ResponseEntity<ProductDto> updateProduct(Long id, ProductDto productDto) throws Throwable;
    public ResponseEntity<Map<String,Boolean>> deleteProduct(Long id);
}
