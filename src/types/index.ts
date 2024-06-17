import { z } from "zod";
import { CurrencySchema, CryptoCurrencyResponceSchema, PairSchema, CryptoPriceSchema } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponceSchema>;
export type Pair = z.infer<typeof PairSchema>;
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;
