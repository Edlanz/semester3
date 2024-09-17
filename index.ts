import Express from "express";
import MedicineRoute from "./router/medicineRouter"

const app = Express()

app.use(Express.json())

app.use(`/medicine`, MedicineRoute)

const PORT = 1992
app.listen(PORT, () => {
    console.log(`Server Drugsstore run on Port ${PORT}`)
})