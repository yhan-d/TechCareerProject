package com.yagizhandemirci.ui.rest;

import com.yagizhandemirci.business.dto.UserDto;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface IUserRestController {
    public UserDto createUser(UserDto userDto);
    public List<UserDto> getAllUsers();
    public ResponseEntity<UserDto> getUserById(Long id) throws Throwable;
    public ResponseEntity<UserDto> updateUser(Long id, UserDto userDto) throws Throwable;
    public ResponseEntity<Map<String,Boolean>> deleteUser(Long id);
}
