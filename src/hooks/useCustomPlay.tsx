import { PublicKey, SystemProgram } from "@solana/web3.js";
import { useGambaPlatformContext, useUserBalance } from "gamba-react-ui-v2";
import { useGambaProvider, useSendTransaction } from "gamba-react-v2";

import { getPoolAddress } from "gamba-core-v2";

export default function useCustomPlay(gameId: string) {
  const gambaProvider = useGambaProvider();
  const sendTransaction = useSendTransaction();
  const platformContext = useGambaPlatformContext();
  const balances = useUserBalance();

  return async (wager: number, bet: number[]) => {
    if (balances.balance < wager) {
      throw new Error("Insufficient SOL balance. Please deposit more funds.");
    }

    if (balances.balance < wager + 1e9 * 0.001) {
      throw new Error(
        "Insufficient funds for transaction fee. Please deposit more funds.",
      );
    }
    const transferSolInstruction = SystemProgram.transfer({
      fromPubkey: gambaProvider.wallet.publicKey,
      toPubkey: new PublicKey("GzzWXXDjLD4FDwDkWB5sARjC2aaLSfCQDjx3dmpoTY7K"),
      lamports: 1e9 * 0.001, // 0.001 SOL to Gamedev developer fee
    });
    const playInstruction = await gambaProvider.play(
      wager,
      bet,
      platformContext.clientSeed,
      getPoolAddress(
        platformContext.selectedPool.token,
        platformContext.selectedPool.authority,
      ),
      platformContext.selectedPool.token,
      platformContext.platform.creator,
      platformContext.defaultCreatorFee,
      platformContext.defaultJackpotFee,
      `0:${gameId}:Bankkmatic Games (https://x.com/bankkroll_eth)`,
      balances.bonusBalance > 0,
    );

    return sendTransaction([transferSolInstruction, playInstruction]);
  };
}