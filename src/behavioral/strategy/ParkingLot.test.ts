import AirportCalculator from "./AirportCalculator"
import BeachCalculator from "./BeachCalculator"
import MallCalculator from "./MallCalculator"
import ParkingLot from "./ParkingLot"

test('Should create a parking lot', () => {
  const parkingLot = new ParkingLot("beach", 500)
  expect(parkingLot.getSlots()).toBe(500)
})

test('Should park a car', () => {
  const parkingLot = new ParkingLot("beach", 500)
  parkingLot.checkin("AAA-1111", new Date("2021-10-01T10:00"))
  expect(parkingLot.getSlots()).toBe(499)
}) 

test('Should park a car on the beach for 2 hours and calculate the ticket value when it leaves, 10 dolars + 5 dollars per hour', () => {
  const parkingLot = new ParkingLot("beach", 500)
  parkingLot.checkin("AAA-1111", new Date("2021-10-01T10:00"))
  const ticket = parkingLot.checkout("AAA-1111", new Date("2021-10-01T12:00"))
  expect(ticket.price).toBe(10)
})

test('Should park a car on the mall for 7 hours and calculate the ticket value when it leaves, 10 dolars for the first 3 hours + 3 dollars per hour', () => {
  const parkingLot = new ParkingLot("mall", 500)
  parkingLot.checkin("AAA-1111", new Date("2021-10-01T10:00"))
  const ticket = parkingLot.checkout("AAA-1111", new Date("2021-10-01T17:00"))
  expect(ticket.price).toBe(22)
})

test('Should park a car on the mall for 3 day and calculate the ticket value when it leaves, 50 dollars per day', () => {
  const parkingLot = new ParkingLot("airport", 500)
  parkingLot.checkin("AAA-1111", new Date("2021-10-01T10:00"))
  const ticket = parkingLot.checkout("AAA-1111", new Date("2021-10-03T10:00"))
  expect(ticket.price).toBe(150)
})
