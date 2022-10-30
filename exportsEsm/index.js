import { inline, pizza } from "./inline.js"
import defaultInline from "./inline.js"
import { group, a, b, c, d } from "./non-inline.js"
import exportDefault from "./non-inline.js"

inline()
defaultInline()

group()
exportDefault()