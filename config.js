// SafePaws 🐾 V3.2 CONFIG
export const CONFIG = {
  APP_NAME: "SafePaws 🐾",
  VEHICLE_TYPE: "CAR",
  COVERAGE: "PH-WIDE",

  MAX_PETS: 4,
  MAX_KG_PER_PET: 30,
  OWNER_ALLOWED_TYPES: ["Emergency"],
  CARRIER_REQUIRED: true,
  RIDER_FINAL_SAY: true,

  FARE: {
    BASE: 150,
    PER_KM: 20,
    SIZE_FEE: { Small: 0, Medium: 50, Large: 100, XL: 150 },
    NIGHT_FEE: 50,
    EMERGENCY_FEE: 100,
    SUV_FEE: 50,
    MIN_FARE: 350
  },

  TYPES: ["Transpo", "Vet", "Groom", "Emergency"],
  STATUSES: ["Booked", "Rider Assigned", "Arrived", "Picked Up", "Otw", "At Clinic", "Completed", "Cancelled"]
};
