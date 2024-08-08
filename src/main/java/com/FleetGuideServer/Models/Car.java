package com.FleetGuideServer.Models;

import com.FleetGuideServer.Enums.CarType;
import com.FleetGuideServer.Enums.TransmissionType;

public class Car {
    private String make;
    private String model;
    private double mpgOrKwPerMile;
    private CarType carType;
    private short engineSize;
    private short numberOfDoors;
    private short numberOfSeats;
    private TransmissionType transmissionType;

    // Constructors
    public Car() {}

    public Car(final String make, final String model, final double mpgOrKwPerMile, final CarType carType,
               final short engineSize, final short numberOfDoors, final short numberOfSeats,
               final TransmissionType transmissionType)
    {
        this.make = make;
        this.model = model;
        this.mpgOrKwPerMile = mpgOrKwPerMile;
        this.carType = carType;
        this.engineSize = engineSize;
        this.numberOfDoors = numberOfDoors;
        this.numberOfSeats = numberOfSeats;
        this.transmissionType = transmissionType;
    }

    // Getters and Setters
    public String getMake() {
        return make;
    }

    public void setMake(final String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(final String model) {
        this.model = model;
    }

    public double getMpgOrKwPerMile() {
        return mpgOrKwPerMile;
    }

    public void setMpgOrKwPerMile(final double mpgOrKwPerMile) {
        this.mpgOrKwPerMile = mpgOrKwPerMile;
    }

    public CarType getCarType() {
        return carType;
    }

    public void setCarType(final CarType carType) {
        this.carType = carType;
    }

    public short getEngineSize() {
        return engineSize;
    }

    public void setEngineSize(final short engineSize) {
        this.engineSize = engineSize;
    }

    public short getNumberOfDoors() {
        return numberOfDoors;
    }

    public void setNumberOfDoors(final short numberOfDoors) {
        this.numberOfDoors = numberOfDoors;
    }

    public short getNumberOfSeats() {
        return numberOfSeats;
    }

    public void setNumberOfSeats(final short numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
    }

    public TransmissionType getTransmissionType() {
        return transmissionType;
    }

    public void setTransmissionType(final TransmissionType transmissionType) {
        this.transmissionType = transmissionType;
    }

    // toString, equals, hashCode methods (optional)
}
