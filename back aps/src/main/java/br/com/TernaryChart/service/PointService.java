/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.TernaryChart.service;

import br.com.TernaryChart.entity.Point;
import br.com.TernaryChart.repository.PointRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Henrique
 */
@RestController
@CrossOrigin("*")
@RequestMapping("/points")
public class PointService{
    
    @Autowired
    private PointRepository pointRepository;
    
    @GetMapping
        public List<Point> readPoints(){
        return (List<Point>) pointRepository.findAll();
    }
    
    @PostMapping
    public Point createPoint(@RequestBody Point point) {
        Point newPoint = pointRepository.save(point);
        return newPoint;
    }

    @PutMapping("/update/{cd_ponto}")
    public ResponseEntity<Point> updatePoint(@RequestBody Point newPoint, @PathVariable Integer cd_ponto)  {
        Optional<Point> oldPoint = pointRepository.findById(cd_ponto);
        if(oldPoint.isPresent()){
            pointRepository.save(newPoint);
            pointRepository.deleteById(cd_ponto);
            return new ResponseEntity<Point>(newPoint, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @DeleteMapping("/{cd_ponto}")
    public Optional<Point> deletePoint (@PathVariable Integer cd_ponto) {
        Optional<Point> newPoint = pointRepository.findById(cd_ponto);
        pointRepository.deleteById(cd_ponto);
        return newPoint;
    }
    
    @GetMapping("/findbyid/{cd_ponto}")
    public Optional<Point> findbyId(@PathVariable Integer cd_ponto){
        Optional<Point> Point = pointRepository.findById(cd_ponto);
        return Point;
    }
    
}