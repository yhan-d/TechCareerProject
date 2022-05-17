package com.yagizhandemirci.data.repository;

import com.yagizhandemirci.data.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductRepository extends JpaRepository<ProductEntity,Long> {
}
