'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit';

const ConnectButtonC = () => {
    const Button = ({ onClick, text }: { onClick: () => void, text: string }) => {
        return (
            <button onClick={onClick} type="button" className="h-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-[16px] rounded-lg w-36 hover:shadow-md hover:shadow-purple-500/25">
                <span>{text}</span>
            </button>
        );
    };

    return (
        <div>
            <ConnectButton.Custom>
                {({
                      account,
                      chain,
                      openAccountModal,
                      openConnectModal,
                      openChainModal,
                      mounted,
                  }) => {
                    const ready = mounted;
                    const connected = ready && account && chain;

                    return (
                        <div
                            {...(!ready && {
                                'aria-hidden': true,
                                style: {
                                    opacity: 0,
                                    pointerEvents: 'none',
                                    userSelect: 'none',
                                },
                            })}
                        >
                            {(() => {
                                if (!connected) {
                                    return (
                                        <Button onClick={openConnectModal} text="Connect Wallet"/>
                                    );
                                }

                                if (chain.unsupported) {
                                    return (
                                        <button onClick={openChainModal} type="button" className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white cursor-pointer rounded-lg">
                                            Wrong network
                                        </button>
                                    );
                                }

                                return (
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <button
                                            onClick={openAccountModal}
                                            type="button"
                                            style={{ textAlign: 'left' }}
                                        >
                                            <div className='flex items-center justify-center rounded-lg  bg-gradient-to-r from-purple-500 to-indigo-500 text-white w-36 px-1 h-10 font-semibold text-[16px]'>
                                                <span>{account.displayName}</span>
                                            </div>
                                        </button>
                                    </div>
                                );
                            })()}
                        </div>
                    );
                }}
            </ConnectButton.Custom>
        </div>
    );
};

export default ConnectButtonC;
