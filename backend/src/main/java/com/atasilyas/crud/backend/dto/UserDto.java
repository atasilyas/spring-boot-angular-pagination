package com.atasilyas.crud.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class UserDto {

    @JsonProperty
    private String password;

    @JsonProperty
    private String username;

    @JsonProperty
    private String mail;

}
