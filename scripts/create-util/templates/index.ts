import type { CreateUtilArgs } from "../create-util.type"

export default ({ name }: CreateUtilArgs): string => {
	return (
		`import type {  } from "./${name}.type"
import {  } from "./${name}.util"`
	)
}