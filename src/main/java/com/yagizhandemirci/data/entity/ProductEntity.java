package com.yagizhandemirci.data.entity;

import com.yagizhandemirci.data.base.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
@Table(name="products")
public class ProductEntity extends BaseEntity {
    public final static long serialVersionUID = 1L;

    @Column(name ="product_name")
    private String productName;

    @Column(name ="product_description")
    private String productDescription;

    @Column(name="product_unit_price")
    private double productUnitPrice;

}
