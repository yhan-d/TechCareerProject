package com.yagizhandemirci;

import com.yagizhandemirci.data.entity.ProductEntity;
import com.yagizhandemirci.data.repository.IProductRepository;
import com.yagizhandemirci.mytest.IMyTest;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Log4j2
class TechCareerProjectApplicationTests implements IMyTest {

    @Autowired
    IProductRepository productRepository;

    @Test
    void contextLoads() {
    }

    //SAVE
    @Override
    @Test
    public void testCreate() {
        ProductEntity entity=new ProductEntity();
        entity.setProductName("Product1");
        entity.setProductDescription("Product1Description");
        entity.setProductUnitPrice(4778);
        productRepository.save(entity);
        //eger: 1 id data bulamazsa Exception fırlat: java.util.NoSuchElementException: No value present
        assertNotNull(productRepository.findById(1L).get());
    }
    //FIND
    @Override
    @Test
    public void testFindbyId() {
        ProductEntity entity=productRepository.findById(1L).get();
        //Belirtilen id bulunmazsa: java.util.NoSuchElementException: No value present
        assertEquals("Product1",entity.getProductName());
    }
    //LIST
    @Override
    @Test
    public void testList() {
        List<ProductEntity> entityList= productRepository.findAll();
        //java.lang.AssertionError:  Expecting actual:0  to be greater than:
        assertThat(entityList).size().isGreaterThan(0);
    }
    //UPDATE
    @Override
    @Test
    public void testUpdate() {
        ProductEntity entity=productRepository.findById(7L).get();
        entity.setProductName("ProductUpdate");
        productRepository.save(entity);
        //org.opentest4j.AssertionFailedError: expected: not equal but was: <employeename55>
        //unexpected:Beklenmeyen
        assertNotEquals("Product7",productRepository.findById(7L).get().getProductName());
    }
    //DELETE
    @Override
    @Test
    public void testDelete() {
        productRepository.deleteById(1L);
        //istenilen data yoksa: No class com.hamitmizrak.data.entity.EmployeeEntity entity with id 1 exists!
        assertThat(productRepository.existsById(1L)).isFalse();
    }
}
