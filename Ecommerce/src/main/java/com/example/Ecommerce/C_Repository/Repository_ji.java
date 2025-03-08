package com.example.Ecommerce.C_Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Ecommerce.C_Entite.Entite;

@Repository 
public interface Repository_ji extends JpaRepository<Entite,Long>  {

}
