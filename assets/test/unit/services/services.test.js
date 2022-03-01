import request from "supertest";

const baseUrl = 'https://6217a42671e7672e53868583.mockapi.io/tableForUsers';

describe('MockApi endpoints', () => {
  it('Should return a 200 status code', async () => {
    const response = await request(baseUrl)
      .get('/');

    //return back 200 with an Array of Objects
    expect(response.statusCode).toBe(200);
  });

  it('Should return a 200 status code if the town with specified name was found', async () => {
    const response = await request(baseUrl, {
      params:
        {search: "Eusebiotown"}
    })
      .get('/')
      .set('Accept', 'application/json');

    //return back 200 with the found object as response
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({
      id: 8,
      city_name: "Eusebiotown",
      city_visited: false,
      city_visits: 1,
    })
  });

  it('Should return a 200 status code if the town is having the visited state changed', async () => {
    const response = await request(baseUrl)
      .put('/8',
        {
          search: "Eusebiotown"
        })
      .send({
        completed: true
      });

    //return back 200 with the changed object as response
    expect(response.statusCode).toBe(200)
    expect(response.body).toMatchObject({
      id: 8,
      city_name: "Eusebiotown",
      city_visited: true | false,
      city_visits: 1,
    })
  });

})
;
