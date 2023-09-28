import "./database";

import Customer from "./app/models/Customer";

class Playground {
  static async play() {
    // const customer = await Customer.findOne({
    //   where: {
    //     name: "testename",
    //   },
    // });

    // const customerDelete = await Customer.destroy({
    //   where: {
    //     name: "testename",
    //   },
    // });

    // const newCustomer = await Customer.create({
    //   name: "testename2",
    //   email: "testemail2",
    // });

    // const customers = await Customer.findAll({
    //   attributes: ["id", "name", "email"],
    // });

    // util pra retornar tudo menos o password hash do usuario
    // const customers = await Customer.findAll({
    //   attributes: {
    //     exclude: ["status", "createdAt", "updatedAt"],
    //   },
    // });

    // const customer = await Customer.findByPk(12);

    // const updatedCustomer = customer.update({
    //   status: "ACTIVE",
    //   name: "testenameupdated",
    // });

    const where = {};

    console.log(...where);
  }
}

Playground.play();
