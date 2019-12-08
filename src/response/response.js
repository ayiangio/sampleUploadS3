module.exports = {

    response: (res, result, status, error, jumlah) => {
        let resultPrint = {}
        resultPrint.error = error || null
        resultPrint.status_code = status || 200
        resultPrint.jumlah = jumlah
        resultPrint.url = result
        return res.status(resultPrint.status_code).json(resultPrint)
    }
}