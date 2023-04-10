import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
    position: fixed; // if scroll, it will be fixed
    width: 100vw;
    height: 100vh;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
    position: fixed;
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background-color: ${({ theme }) => theme["gray-800"]};

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        margin-top: 2rem;

        input {
            border-radius: 6px;
            border: 0;
            background-color: ${({ theme }) => theme["gray-900"]};
            color: ${({ theme }) => theme["gray-300"]};
            padding: 1rem;

            &::placeholder {
                color: ${({ theme }) => theme["gray-500"]};
            }
        }
        
        button[type="submit"] {
            height: 58px;
            border: 0;
            background-color: ${({ theme }) => theme["green-500"]};
            color: ${({ theme }) => theme.white};
            font-weight: bold;
            border-radius: 6px;
            padding: 0 1.25rem;
            margin-top: 1.5rem;
            cursor: pointer;

            &:hover {
                background-color: ${({ theme }) => theme["green-700"]};
                transition: background-color 0.2s;
            }
        }
    }
`

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0; /* to adjust the focus, could be font-size: 0 too */
    cursor: pointer;
    color: ${({ theme }) => theme["gray-500"]};
`



