package com.yagizhandemirci.data.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
@Table(name="users")
public class UserEntity extends BaseEntity implements Serializable {
    public final static long serialVersionUID = 1L;

    @Column(name ="user_first_name")
    private String userFirstName;

    @Column(name ="user_surname")
    private String userLastName;

    @Column(name ="user_email")
    private String userEmail;

    @Column(name = "user_password")
    private String userPassword;

    @Column(name = "user_photo")
    private String userPhoto;


}
