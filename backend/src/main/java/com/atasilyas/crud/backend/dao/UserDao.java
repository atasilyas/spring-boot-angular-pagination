package com.atasilyas.crud.backend.dao;

import com.atasilyas.crud.backend.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserDao  extends JpaRepository<User, Long> {
}
