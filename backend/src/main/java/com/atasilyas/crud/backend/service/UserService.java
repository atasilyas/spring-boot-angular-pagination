package com.atasilyas.crud.backend.service;

import com.atasilyas.crud.backend.dto.PageRequest;
import com.atasilyas.crud.backend.model.User;
import org.springframework.data.domain.Page;

import java.util.List;

public interface UserService {

    List<User> findAll(PageRequest pageRequest);

    void save(User user);
}
