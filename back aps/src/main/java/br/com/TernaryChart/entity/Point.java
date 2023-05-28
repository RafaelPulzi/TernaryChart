/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.TernaryChart.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 *
 * @author Henrique
 */
@Entity
@Table(name = "points")
public class Point {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cd_ponto")
    private int cd_ponto;
    
    @Column(name = "nm_ponto", length = 50, nullable = true)
    private String nm_ponto;
    
    @Column(name = "r_ponto", nullable = true)
    private long r_ponto;
    
    @Column(name = "n_ponto", nullable = true)
    private long n_ponto;
    
    @Column(name = "f_ponto", nullable = true)
    private long f_ponto;
   
    public int getCd_ponto() {
        return cd_ponto;
    }

    public void setCd_ponto(int cd_ponto) {
        this.cd_ponto = cd_ponto;
    }

    public String getNm_ponto() {
        return nm_ponto;
    }

    public void setNm_ponto(String nm_ponto) {
        this.nm_ponto = nm_ponto;
    }

    public long getR_ponto() {
        return r_ponto;
    }

    public void setR_ponto(long r_ponto) {
        this.r_ponto = r_ponto;
    }

    public long getN_ponto() {
        return n_ponto;
    }

    public void setN_ponto(long n_ponto) {
        this.n_ponto = n_ponto;
    }

    public long getF_ponto() {
        return f_ponto;
    }

    public void setF_ponto(long f_ponto) {
        this.f_ponto = f_ponto;
    }

}
