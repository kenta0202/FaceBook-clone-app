/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextApiRequest, NextApiResponse } from "next";
import { sampleUserData } from "../../../utils/sample-data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error("Cannot find user data");
    }

    res.status(200).json(sampleUserData);
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
