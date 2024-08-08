package com.FleetGuideServer.Service;

import com.FleetGuideServer.Models.Car;

import java.util.List;

public interface CarGetterApiService {
    List<Car> getAllCars();
    List<Car> getCarsByMake(final String make);
    List<Car> getCarsByModel(final String model);
}
