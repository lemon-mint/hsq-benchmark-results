window.BENCHMARK_DATA = {
  "lastUpdate": 1702952783736,
  "repoUrl": "https://github.com/lemon-mint/hsq",
  "entries": {
    "Go Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ice.lemons.mint@gmail.com",
            "name": "lemon-mint",
            "username": "lemon-mint"
          },
          "committer": {
            "email": "ice.lemons.mint@gmail.com",
            "name": "lemon-mint",
            "username": "lemon-mint"
          },
          "distinct": true,
          "id": "2d8c7714dba77a1e484de797ee77398b4eb79823",
          "message": "Refactor benchmark command to target correct\npackage directory\n\nAdjusted the benchmark command to target the correct package directory\nfor off-heap ring, ensuring accurate benchmark results. This change\nresolves the issue of incorrect benchmark data. No related issues.",
          "timestamp": "2023-12-19T10:22:23+09:00",
          "tree_id": "079f3364b30d40a31e76172078ba3a2bd63f5a35",
          "url": "https://github.com/lemon-mint/hsq/commit/2d8c7714dba77a1e484de797ee77398b4eb79823"
        },
        "date": 1702949133926,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.09,
            "unit": "ns/op",
            "extra": "422097289 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "422097289 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "422097289 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ice.lemons.mint@gmail.com",
            "name": "lemon-mint",
            "username": "lemon-mint"
          },
          "committer": {
            "email": "ice.lemons.mint@gmail.com",
            "name": "lemon-mint",
            "username": "lemon-mint"
          },
          "distinct": true,
          "id": "89a422e58d931927050c0c7e6e7fb0d976741523",
          "message": "Refactor README.md for clarity and structure\n\nReformatted README.md to improve readability and organization. Updated\nthe header and section headings to provide clearer information for\nreaders. No issues fixed.",
          "timestamp": "2023-12-19T10:46:05+09:00",
          "tree_id": "c008890cf0e9c3c6fbed381ea894ed597378f37d",
          "url": "https://github.com/lemon-mint/hsq/commit/89a422e58d931927050c0c7e6e7fb0d976741523"
        },
        "date": 1702950399525,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.85,
            "unit": "ns/op",
            "extra": "440524844 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "440524844 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "440524844 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "89a422e58d931927050c0c7e6e7fb0d976741523",
          "message": "Refactor README.md for clarity and structure\n\nReformatted README.md to improve readability and organization. Updated\nthe header and section headings to provide clearer information for\nreaders. No issues fixed.",
          "timestamp": "2023-12-19T01:46:05Z",
          "url": "https://github.com/lemon-mint/hsq/commit/89a422e58d931927050c0c7e6e7fb0d976741523"
        },
        "date": 1702952783556,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.59,
            "unit": "ns/op",
            "extra": "420063208 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "420063208 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "420063208 times\n4 procs"
          }
        ]
      }
    ]
  }
}