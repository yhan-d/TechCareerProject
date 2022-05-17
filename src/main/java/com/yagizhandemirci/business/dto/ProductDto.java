package com.yagizhandemirci.business.dto;

import com.yagizhandemirci.business.base.BaseDto;
import lombok.*;

// LOMBOK
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder


public class ProductDto extends BaseDto {

    private String productName;
    private String productDescription;
    private double productUnitPrice ;
    private String productPhoto;
}
