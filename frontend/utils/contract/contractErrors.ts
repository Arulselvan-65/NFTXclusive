import { toast } from 'react-toastify';

export function handleContractErrors(args: any) {
    let errorMessage = args.error ? args.error.message : "An unexpected error occurred";
  
    if (errorMessage.includes('InvalidTokenId')) {
      toast.error("Invalid token ID");
    } else if (errorMessage.includes('InsufficientTokenBalance')) {
      toast.error("Insufficient balance");
    } else if (errorMessage.includes('NotTokenOwner')) {
      toast.error("Not token owner");
    } else if (errorMessage.includes('out of gas')) {
      toast.error("Out of gas");
    } else if (errorMessage.includes('insufficient funds for gas')) {
      toast.error("Insufficient funds for gas");
    } else if (errorMessage.includes("Wallet not connected")) {
      toast.error("Please connect your wallet to continue");
    } else {
      toast.error(errorMessage);
    }
  }