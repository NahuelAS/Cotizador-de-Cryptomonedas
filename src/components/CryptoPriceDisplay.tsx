import { useMemo } from "react";
import { useCryptoStore } from "../store"
import Spinner from "./Spinner";

export default function CryptoPriceDisplay() {
    
    const result = useCryptoStore((state) => state.result);
    const loading = useCryptoStore((state) => state.loading);
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result]);
    
    return (
        <div className="result-wrapper">
            {loading ? <Spinner /> : hasResult && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img 
                            src={`https://cryptocompare.com/${result.IMAGEURL}`} 
                            alt="Imagen de Criptomoneda" 
                        />
                        <div>
                            <p>Precio: <span>{result.PRICE}</span></p>
                            <p>Valor más Alto del día: <span>{result.HIGHDAY}</span></p>
                            <p>Valor más Bajo del día: <span>{result.LOWDAY}</span></p>
                            <p>Valor últimas 24h: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}
            
        </div>
    )
}
