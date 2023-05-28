/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package br.com.TernaryChart.repository;

import br.com.TernaryChart.entity.Point;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Henrique
 */
public interface PointRepository extends CrudRepository<Point, Integer>{
    
}
