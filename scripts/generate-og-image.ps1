param(
  [string]$OutputPath = (Join-Path $PSScriptRoot "..\public\og-psicosense-v2.png")
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

function New-RoundedRectanglePath {
  param(
    [float]$X,
    [float]$Y,
    [float]$Width,
    [float]$Height,
    [float]$Radius
  )

  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $diameter = $Radius * 2

  $path.AddArc($X, $Y, $diameter, $diameter, 180, 90)
  $path.AddArc($X + $Width - $diameter, $Y, $diameter, $diameter, 270, 90)
  $path.AddArc($X + $Width - $diameter, $Y + $Height - $diameter, $diameter, $diameter, 0, 90)
  $path.AddArc($X, $Y + $Height - $diameter, $diameter, $diameter, 90, 90)
  $path.CloseFigure()

  return $path
}

function Fill-Circle {
  param(
    [System.Drawing.Graphics]$Graphics,
    [System.Drawing.Color]$Color,
    [float]$X,
    [float]$Y,
    [float]$Size
  )

  $brush = New-Object System.Drawing.SolidBrush($Color)
  try {
    $Graphics.FillEllipse($brush, $X, $Y, $Size, $Size)
  }
  finally {
    $brush.Dispose()
  }
}

$width = 1200
$height = 630
$resolvedOutput = [System.IO.Path]::GetFullPath($OutputPath)
$outputDir = Split-Path -Parent $resolvedOutput

if (-not (Test-Path $outputDir)) {
  New-Item -ItemType Directory -Path $outputDir | Out-Null
}

$bitmap = New-Object System.Drawing.Bitmap($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)

try {
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

  $backgroundRect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
  $bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $backgroundRect,
    [System.Drawing.Color]::FromArgb(255, 14, 22, 42),
    [System.Drawing.Color]::FromArgb(255, 102, 126, 234),
    24
  )
  try {
    $graphics.FillRectangle($bgBrush, $backgroundRect)
  }
  finally {
    $bgBrush.Dispose()
  }


  Fill-Circle -Graphics $graphics -Color ([System.Drawing.Color]::FromArgb(70, 255, 215, 0)) -X 820 -Y 40 -Size 280
  Fill-Circle -Graphics $graphics -Color ([System.Drawing.Color]::FromArgb(48, 97, 218, 251)) -X 900 -Y 300 -Size 220
  Fill-Circle -Graphics $graphics -Color ([System.Drawing.Color]::FromArgb(38, 255, 255, 255)) -X 720 -Y 180 -Size 360

  $dotBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(35, 255, 255, 255))
  try {
    foreach ($row in 0..6) {
      foreach ($col in 0..7) {
        $graphics.FillEllipse($dotBrush, 760 + ($col * 36), 78 + ($row * 36), 6, 6)
      }
    }
  }
  finally {
    $dotBrush.Dispose()
  }

  $panelPath = New-RoundedRectanglePath -X 56 -Y 58 -Width 1090 -Height 514 -Radius 34
  try {
    $panelBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
      (New-Object System.Drawing.Rectangle(56, 58, 1090, 514)),
      [System.Drawing.Color]::FromArgb(200, 12, 19, 36),
      [System.Drawing.Color]::FromArgb(130, 17, 25, 48),
      0
    )
    try {
      $graphics.FillPath($panelBrush, $panelPath)
    }
    finally {
      $panelBrush.Dispose()
    }

    $panelPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(55, 255, 255, 255), 1.8)
    try {
      $graphics.DrawPath($panelPen, $panelPath)
    }
    finally {
      $panelPen.Dispose()
    }
  }
  finally {
    $panelPath.Dispose()
  }

  $pillPath = New-RoundedRectanglePath -X 92 -Y 92 -Width 360 -Height 48 -Radius 24
  try {
    $pillBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(44, 255, 255, 255))
    $pillPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(80, 255, 255, 255), 1.2)
    try {
      $graphics.FillPath($pillBrush, $pillPath)
      $graphics.DrawPath($pillPen, $pillPath)
    }
    finally {
      $pillBrush.Dispose()
      $pillPen.Dispose()
    }
  }
  finally {
    $pillPath.Dispose()
  }

  $whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
  $softBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(220, 232, 239, 255))
  $accentBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 215, 0))
  $cyanBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 129, 223, 255))
  $mutedBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(210, 200, 212, 236))

  $pillFont = New-Object System.Drawing.Font("Segoe UI Semibold", 16, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
  $titleFont = New-Object System.Drawing.Font("Segoe UI Semibold", 54, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $subtitleFont = New-Object System.Drawing.Font("Segoe UI", 24, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
  $footerFont = New-Object System.Drawing.Font("Segoe UI Semibold", 18, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
  $smallFont = New-Object System.Drawing.Font("Segoe UI", 18, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)

  try {
    $graphics.DrawString("IA + automacao para psicologos e clinicas", $pillFont, $whiteBrush, 110, 104)

    $graphics.DrawString("PsicoSense", $titleFont, $whiteBrush, 90, 175)

    $subtitleLines = @(
      "Organize pacientes, agenda e rotina clinica",
      "em um so lugar com mais praticidade."
    )

    $subtitleY = 275
    foreach ($line in $subtitleLines) {
      $graphics.DrawString($line, $subtitleFont, $softBrush, 92, $subtitleY)
      $subtitleY += 36
    }

    $featureBlocks = @(
      @{ X = 94; Y = 392; W = 170; Label = "Rotina clinica" },
      @{ X = 278; Y = 392; W = 170; Label = "Apoio com IA" },
      @{ X = 462; Y = 392; W = 210; Label = "Mais eficiencia" }
    )

    foreach ($block in $featureBlocks) {
      $path = New-RoundedRectanglePath -X $block.X -Y $block.Y -Width $block.W -Height 54 -Radius 18
      try {
        $b = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(34, 255, 255, 255))
        $p = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(52, 255, 255, 255), 1)
        try {
          $graphics.FillPath($b, $path)
          $graphics.DrawPath($p, $path)
        }
        finally {
          $b.Dispose()
          $p.Dispose()
        }
      }
      finally {
        $path.Dispose()
      }

      $graphics.DrawString($block.Label, $footerFont, $whiteBrush, $block.X + 18, $block.Y + 14)
    }

    $graphics.DrawString("psicosense.com.br", $footerFont, $accentBrush, 94, 486)
    $graphics.DrawString("app.psicosense.com.br", $smallFont, $mutedBrush, 94, 521)

    $orbitPen1 = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(170, 129, 223, 255), 7)
    $orbitPen2 = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(130, 255, 215, 0), 4)
    $ringPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(120, 255, 255, 255), 2)
    $linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(110, 255, 255, 255), 2.4)

    try {
      $graphics.DrawEllipse($orbitPen1, 745, 180, 360, 180)
      $graphics.DrawEllipse($orbitPen1, 820, 105, 210, 330)
      $graphics.DrawEllipse($orbitPen2, 790, 145, 270, 250)
      $graphics.DrawEllipse($ringPen, 860, 205, 130, 130)
      $graphics.DrawEllipse($ringPen, 840, 185, 170, 170)
      Fill-Circle -Graphics $graphics -Color ([System.Drawing.Color]::FromArgb(255, 255, 215, 0)) -X 907 -Y 252 -Size 36

      $linePen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
      $linePen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
      $graphics.DrawLine($linePen, 780, 470, 1030, 470)
      $graphics.DrawLine($linePen, 780, 500, 990, 500)
      $graphics.DrawLine($linePen, 780, 530, 1060, 530)

      Fill-Circle -Graphics $graphics -Color ([System.Drawing.Color]::FromArgb(255, 129, 223, 255)) -X 758 -Y 462 -Size 16
      Fill-Circle -Graphics $graphics -Color ([System.Drawing.Color]::FromArgb(255, 255, 215, 0)) -X 758 -Y 492 -Size 16
      Fill-Circle -Graphics $graphics -Color ([System.Drawing.Color]::FromArgb(255, 255, 255, 255)) -X 758 -Y 522 -Size 16
    }
    finally {
      $orbitPen1.Dispose()
      $orbitPen2.Dispose()
      $ringPen.Dispose()
      $linePen.Dispose()
    }
  }
  finally {
    $whiteBrush.Dispose()
    $softBrush.Dispose()
    $accentBrush.Dispose()
    $cyanBrush.Dispose()
    $mutedBrush.Dispose()
    $pillFont.Dispose()
    $titleFont.Dispose()
    $subtitleFont.Dispose()
    $footerFont.Dispose()
    $smallFont.Dispose()
  }

  $bitmap.Save($resolvedOutput, [System.Drawing.Imaging.ImageFormat]::Png)
}
finally {
  $graphics.Dispose()
  $bitmap.Dispose()
}

Write-Output "Saved OG image to $resolvedOutput"


