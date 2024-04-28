import { NextApiHandler, NextApiRequest } from "next";
import formidable from "formidable";
import path from "path";
import { readdir, mkdir } from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (
  req: NextApiRequest,
  saveLocally?: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/images");
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + "_" + path.originalFilename;
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

const handler = async (req: NextApiRequest) => {
  try {
    await readdir(path.join(process.cwd() + "/public", "/images"));
  } catch (error) {
    await mkdir(path.join(process.cwd() + "/public", "/images"));
  }
  const dirFile = await readFile(req, true);
  return dirFile;
};

export default handler;
