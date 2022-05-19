package com.yagizhandemirci.business.dto;


import lombok.*;

// LOMBOK
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder


public class ProductDto {

    private Long productId;
    private String productName;
    private String productDescription;
    private double productUnitPrice ;
    private String productPhoto;
}
