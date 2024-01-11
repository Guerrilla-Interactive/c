import { ZodFormattedError } from "zod"
import { clientEnvSchema } from "./schema"

const clientEnvRaw = {
	NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
	NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
}

// Parse the env variables provided against the defined schema 
const _clientEnv = clientEnvSchema.safeParse(clientEnvRaw)

// Format error
export const formatErrors = (
	errors: ZodFormattedError<Map<string, string>, string>
) =>
	Object.entries(errors)
		.map(([name, value]) => {
			if (value && "_errors" in value)
				return `${name}: ${value._errors.join(", ")}\n`
		})
		.filter(Boolean)

if (!_clientEnv.success) {
	console.error(
		"❌ Invalid environment variables:\n",
		...formatErrors(_clientEnv.error.format())
	)
	throw new Error(`Invalid environment variables`)
}

// Ensure that the keys start with NEXT_PUBLIC_
// otherwise Next doesn't expose those variables client side 
for (let key of Object.keys(_clientEnv.data)) {
	const mustStartWith = "NEXT_PUBLIC_"
	if (!key.startsWith(mustStartWith)) {
		console.warn(
			`❌ Invalid public environment variable name: ${key}. It must begin with ${mustStartWith}`
		)

		throw new Error(`Invalid public environment variable name. Must start with ${mustStartWith}`)
	}
}

export const clientEnv = _clientEnv.data
