[CmdletBinding()]
param (
  [Parameter()]
  [switch]
  $dist,

  [Parameter()]
  [switch]
  $test
)

if ($dist)
{
  if (Test-Path .\dist)
  {
    Remove-Item -Recurse .\dist
  }
}

if ($test)
{
  $filter = { $_ -notlike '*.tex' -and $_ -notlike '*.ts' -and $_ -notlike '*.ttf' }

  Get-ChildItem .\test\
  | Where-Object $filter
  | Remove-Item -Recurse
}
