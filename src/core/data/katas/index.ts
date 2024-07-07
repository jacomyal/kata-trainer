import { keyBy } from "lodash-es";

import { HEIAN_SHODAN } from "./heian-shodan.ts";
import type { EnrichedKata } from "./types.ts";
import { enrichKata } from "./utils.ts";

export const KATAS: EnrichedKata[] = [HEIAN_SHODAN].map((kata) => enrichKata(kata));

export const KATAS_INDEX = keyBy(KATAS, "slug");
