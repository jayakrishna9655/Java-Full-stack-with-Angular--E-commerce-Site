package com.example.Ecommerce.C_Entite;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "Ecommerce")
public class Entite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonProperty("OrderName")
    @Column(name = "OrderName")
    private String orderName;

    @JsonProperty("UserName")
    @Column(name = "UserName")
    private String userName;

    @JsonProperty("Password")
    @Column(name = "Password")
    private String password;

    @JsonProperty("Email")
    @Column(name = "Email")
    private String email;

    public Entite() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOrderName() {
        return orderName;
    }

    public void setOrderName(String orderName) {
        this.orderName = orderName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
