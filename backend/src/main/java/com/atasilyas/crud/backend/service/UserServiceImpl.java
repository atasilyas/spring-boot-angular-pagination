package com.atasilyas.crud.backend.service;

import com.atasilyas.crud.backend.dao.UserDao;
import com.atasilyas.crud.backend.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements  UserService{

    private final UserDao userDao;

    @Override
    public List<User> findAll(com.atasilyas.crud.backend.dto.PageRequest pageRequest) {

        Pageable paging = PageRequest.of(pageRequest.getPageNo(), pageRequest.getPageSize(), Sort.by(pageRequest.getSortBy()));
        Page<User> pagedResult = userDao.findAll(paging);

        if(pagedResult.hasContent()) {
            return pagedResult.getContent();
        } else {
            return new ArrayList<User>();
        }
    }

    @Override
    public void save(User user) {
        userDao.save(user);
    }
}
