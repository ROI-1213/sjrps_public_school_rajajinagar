Add-Type -AssemblyName System.IO.Compression.FileSystem

$docxFiles = Get-ChildItem -Path "Events" -Recurse -Filter "*.docx"

foreach ($file in $docxFiles) {
    Write-Host "=========================================="
    Write-Host "FILE: $($file.FullName)"
    Write-Host "=========================================="
    try {
        $zip = [System.IO.Compression.ZipFile]::OpenRead($file.FullName)
        $entry = $zip.GetEntry('word/document.xml')
        if ($entry) {
            $stream = $entry.Open()
            $reader = New-Object System.IO.StreamReader($stream)
            $xml = $reader.ReadToEnd()
            $reader.Close()
            $stream.Close()
            $text = [regex]::Replace($xml, '<w:p[^>]*>', "`n")
            $text = [regex]::Replace($text, '<[^>]+>', '')
            Write-Host $text.Trim()
        }
        $zip.Dispose()
    } catch {
        Write-Host "Error: $($_.Exception.Message)"
    }
}
