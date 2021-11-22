import React from 'react'
import { Button } from '@material-ui/core'

export default function ButtonForm({labelButton, onClick}) {
    return (
        <div>
            <Button fullWidth onClick={onClick} size="large" variant="contained">{labelButton}</Button>
        </div>

    )
}