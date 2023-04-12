const supertest = require("supertest");
const app = require("../server");
describe("auth", () => {
  it("register ", async () => {
    const res = await supertest(app).post("/api/auth/register").send({
      name: "rrrr",
      email: "rrrr@gmail.com",
      password: "12345678",
      password2: "12345678",
    });
    expect(res.statusCode).toEqual(201);
  });

  it("login ", async () => {
    const res = await supertest(app).post("/api/auth/login").send({
      email: "tt@gmail.com",
      password: "1234567890",
    });
    expect(res.statusCode).toEqual(200);
  });
});

//test client
describe("client", () => {
  it("Add ", async () => {
    const res = await supertest(app).post("/api/client").send({
      name: "tttt",
      cin: "tt1234m",
      tel: "1234567890",
    });
    expect(res.statusCode).toEqual(500);
  });

  it("Delete client", async () => {
    const res = await supertest(app).delete(
      "/api/client/63b1f04f028ba228eb945e02"
    );
    expect(res.statusCode).toEqual(200);
  });
  it("Modifier client", async () => {
    const res = await supertest(app)
      .patch("/api/client/63b1f04f028ba228eb945e02")
      .send({
        name: "mmm",
        cin: "tt1234m",
        tel: "1234567890",
      });
    expect(res.statusCode).toEqual(200);
  });
  it("Get client", async () => {
    const res = await supertest(app).get("/api/client");
    expect(res.statusCode).toEqual(200);
  });
});

//test appartement
describe("appartement", () => {
  it("Add ", async () => {
    const res = await supertest(app).post("/api/appartement").send({
      Adresse: "laayoune",
      numero: "123",
      loue: "true",
      surface: "1234567890",
      prix: "1234567890",
      client_id: "63bae091f3ed8b1171a8a1a2",
    });
    expect(res.statusCode).toEqual(500);
  });

  it("Delete appartement", async () => {
    const res = await supertest(app).delete(
      "/api/appartement/63b1f04f028ba228eb945e02"
    );
    expect(res.statusCode).toEqual(200);
  });
  it("Modifier appartement", async () => {
    const res = await supertest(app)
      .patch("/api/appartement/63b1f04f028ba228eb945e02")
      .send({
        adresse: "mmm",
        numero: "123",
        loue: "true",
        surface: "1234567890",
        prix: "1234567890",
        client_id: "63b449b9ae3cab2ccbecb082",
      });
    expect(res.statusCode).toEqual(200);
  });
  it("Get appartement", async () => {
    const res = await supertest(app).get("/api/appartement");
    expect(res.statusCode).toEqual(200);
  });
});

//test paiement
describe("paiement", () => {
  it("Add ", async () => {
    const res = await supertest(app).post("/api/paiement").send({
      Date: "2024/12/02",
      "appartementid": "63c53d104f3135e5f3dbabfe",
    });
    expect(res.statusCode).toEqual(200);
  });

  it("Delete paiement", async () => {
    const res = await supertest(app).delete(
      "/api/paiement/63c53d104f3135e5f3dbabfe"
    );
    expect(res.statusCode).toEqual(200);
  });
  it("Modifier paiement", async () => {
    const res = await supertest(app)
      .patch("/api/paiement/63c53d104f3135e5f3dbabfe")
      .send({
        Date: "2023/12/02",
      });
    expect(res.statusCode).toEqual(200);
  });
  it("Get paiement", async () => {
    const res = await supertest(app).get("/api/paiement");
    expect(res.statusCode).toEqual(200);
  });
});
