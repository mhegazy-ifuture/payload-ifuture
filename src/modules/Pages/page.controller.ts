import payload from "payload";
import { asyncHandler } from "../../utils/errorHandling";

export  const getAllPages = asyncHandler(async (req, res, next) => {
  const { locale } = req.params;
  const {docs} = await payload.find({ collection: "pages" ,depth: 2 });
  return res.status(200).json({ message: "Done", depth:2 , pages:docs  });
});

export const getSpecificPage =asyncHandler(async(req,res,next)=>{





})