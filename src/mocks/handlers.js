import { rest } from "msw";

export const usersHandlers = [
  rest.post(`${process.env.REACT_APP_API_URL}user/login`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Marian",
        token: "mocktoken",
      })
    );
  }),
  rest.post(
    `${process.env.REACT_APP_API_URL}user/register`,
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          username: "marianlop",
          id: "1",
        })
      );
    }
  ),
];
