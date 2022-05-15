package com.yagizhandemirci.business.dto;

import lombok.*;

// LOMBOK
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder


public class UserDto {

    private Long userId;
    private String userFirstName;
    private String userLastName;
    private String userEmail;
    private String userPhoto;
}
