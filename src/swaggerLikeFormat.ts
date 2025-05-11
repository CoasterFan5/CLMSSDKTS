import { z } from "zod";

const modelsZod = z.object({
  id: z.string(),
  description: z.string().optional(),
  required: z.union([z.array(z.string()), z.string()]),
  deprecated: z.boolean(),
  deprecation_description: z.string().optional().nullable(),
  properties: z
    .record(
      z.string(),
      z.object({
        description: z.string().optional(),
        example: z.unknown(),
        type: z
          .enum([
            "integer",
            "string|User",
            "number",
            "uuid",
            "string",
            "boolean",
            "object",
            "array",
            "datetime",
            "void",
          ])
          .optional(),
      }),
    )
    .nullable(),
});

export const swaggerLikeFormat = z.object({
  apiVersion: z.string(),
  swaggerVersion: z.string(),
  basePath: z.string().url(),
  resourcePath: z.string(),
  produces: z.array(z.string()),
  apis: z.array(
    z.object({
      path: z.string(),
      description: z.string(),
      operations: z.array(
        z.object({
          method: z.enum(["GET", "POST", "PUT", "DELETE", "PATCH"]),
          summary: z.string(),
          notes: z.string(),
          nickname: z.string(),
          parameters: z.array(
            z.object({
              paramType: z.string(),
              name: z.string(),
              description: z.string(),
              type: z.string(),
              required: z.boolean(),
              deprecated: z.boolean(),
            }),
          ),
          deprecated: z.boolean(),
          deprecated_description: z.string().optional(),
          type: z.string(),
        }),
      ),
    }),
  ),
  models: z.record(z.string(), modelsZod),
});
