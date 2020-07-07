package com.atasilyas.crud.backend.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "t_user")
@ToString(callSuper = true, of = "")
@EqualsAndHashCode(of = "id")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String password;
    private String username;
    private String mail;


}
