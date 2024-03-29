import React from 'react';

export const TopNavbar = () => {
    return (
        <div>
            <div style={{ display: "flex"}}>
                <button style={{ background: "none", border: "none", cursor: "pointer" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" style={{ fill: "currentColor", fillRule: "evenodd" }}>
                        <path fill="currentColor" fillRule="evenodd" d="M14.455 2.474a6.586 6.586 0 0 0-9.001 5.385l-.252 2.266l-.006.054a7 7 0 0 1-.939 2.782l-.028.047l-.578.963l-.024.04c-.242.403-.46.768-.606 1.077c-.148.314-.307.74-.23 1.224a2 2 0 0 0 .691 1.222c.376.314.822.397 1.168.432c.34.034.766.034 1.235.034h12.23c.469 0 .894 0 1.235-.034c.345-.035.792-.118 1.167-.432a2 2 0 0 0 .692-1.222c.077-.483-.082-.91-.23-1.224c-.146-.31-.364-.674-.606-1.077l-.024-.04l-.578-.963l-.028-.047a6.999 6.999 0 0 1-.815-2.047a5.023 5.023 0 0 1-2.045-.04a9.001 9.001 0 0 0 1.141 3.11l.032.053l.578.963c.273.456.438.733.536.94l.014.032a2.31 2.31 0 0 1-.035.004c-.227.023-.55.024-1.081.024H5.932c-.531 0-.854-.001-1.082-.024a2.337 2.337 0 0 1-.034-.004l.014-.032c.098-.207.263-.484.536-.94l.578-.963l.032-.053a9 9 0 0 0 1.207-3.577l.007-.06l.252-2.267a4.586 4.586 0 0 1 5.893-3.882a5.004 5.004 0 0 1 1.12-1.724m2.527 1.804a2 2 0 0 0-.937 2.145c.12.225.222.461.305.707a1.998 1.998 0 0 0 2.203.793l-.007-.064a6.564 6.564 0 0 0-1.564-3.581" clipRule="evenodd" />
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M9.102 17.665c.171.957.548 1.802 1.072 2.405c.524.603 1.166.93 1.826.93c.66 0 1.302-.327 1.826-.93s.9-1.448 1.072-2.405" />
                        <circle cx="18" cy="6" r="2.5" fill="currentColor" stroke="currentColor" />
                    </svg>
                </button>
                <button style={{ background: "none", border: "none", cursor: "pointer" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m14.777 14.038l2.65-3.92c.262-.386-.235-.805-.615-.529l-2.858 2.015a.571.571 0 0 1-.652 0l-2.116-1.477c-.633-.437-1.538-.277-1.963.335l-2.65 3.92c-.262.386.235.806.615.529l2.858-2.015a.571.571 0 0 1 .652 0l2.116 1.452c.633.462 1.538.302 1.963-.31" />
                        <path fill="currentColor" fillRule="evenodd" d="M12 2.25A9.75 9.75 0 0 0 2.25 12a9.724 9.724 0 0 0 3 7.036V21.5a.75.75 0 0 0 .987.712l2.78-.927A9.745 9.745 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25M3.75 12a8.25 8.25 0 1 1 5.516 7.787a.75.75 0 0 0-.486-.004l-2.03.676v-1.75a.75.75 0 0 0-.25-.56A8.228 8.228 0 0 1 3.75 12" clipRule="evenodd" />
                    </svg>
                </button>
                <button style={{ boxShadow: "5px 5px 5px 1px rgb(180, 180, 180)",display: "flex",fontSize: "1.5rem",justifyContent: "center", alignItems: "center",borderRadius: "9999px",paddingLeft: "2rem", paddingRight: "2rem", color: "#fff",backgroundImage: "linear-gradient(to bottom right, #4F46E5, #C54CC5, #EC4899)" }}>
                + Create A Post
                </button>
            </div>
        </div>
    );
};
