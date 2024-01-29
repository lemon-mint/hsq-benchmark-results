window.BENCHMARK_DATA = {
  "lastUpdate": 1706495035745,
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
          "id": "1591646339767d1cee00227ddb4c3b127d30367e",
          "message": "Refactor Go benchmark configuration and remove\nunused code\n\nSimplify go test benchmark command, remove unused offheap/ring and mmap\nrelated code files, and their associated test files. This cleanup\nenhances code maintainability and reduces clutter. No issues addressed.",
          "timestamp": "2023-12-19T15:34:39+09:00",
          "tree_id": "529f9413b91168eb82e4ce70fbc83dd104ee3fd5",
          "url": "https://github.com/lemon-mint/hsq/commit/1591646339767d1cee00227ddb4c3b127d30367e"
        },
        "date": 1702967722992,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.77,
            "unit": "ns/op",
            "extra": "208729748 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "208729748 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "208729748 times\n4 procs"
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
          "id": "be7400df6a51a4e1e514792d333d626ad03c6459",
          "message": "Refactor MPMC tests and introduce new test cases\n\nAdd tests for MPMC with uint8, complex128, and custom _chunk type,\nenhancing test coverage and ensuring correctness of the MPMC ring\nfunctionalities.",
          "timestamp": "2023-12-19T17:05:36+09:00",
          "tree_id": "fd74e6af38ed70606733022d454529980fc693b0",
          "url": "https://github.com/lemon-mint/hsq/commit/be7400df6a51a4e1e514792d333d626ad03c6459"
        },
        "date": 1702973175514,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2693478,
            "unit": "ns/op",
            "extra": "2176 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 398640.47,
            "unit": "MB/s",
            "extra": "2176 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2176 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2176 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.45,
            "unit": "ns/op",
            "extra": "218588722 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "218588722 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "218588722 times\n4 procs"
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
          "id": "be7400df6a51a4e1e514792d333d626ad03c6459",
          "message": "Refactor MPMC tests and introduce new test cases\n\nAdd tests for MPMC with uint8, complex128, and custom _chunk type,\nenhancing test coverage and ensuring correctness of the MPMC ring\nfunctionalities.",
          "timestamp": "2023-12-19T17:05:36+09:00",
          "tree_id": "fd74e6af38ed70606733022d454529980fc693b0",
          "url": "https://github.com/lemon-mint/hsq/commit/be7400df6a51a4e1e514792d333d626ad03c6459"
        },
        "date": 1702973434263,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2744040,
            "unit": "ns/op",
            "extra": "2071 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 391295.16,
            "unit": "MB/s",
            "extra": "2071 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2071 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2071 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.04,
            "unit": "ns/op",
            "extra": "217659944 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "217659944 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "217659944 times\n4 procs"
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
          "id": "be7400df6a51a4e1e514792d333d626ad03c6459",
          "message": "Refactor MPMC tests and introduce new test cases\n\nAdd tests for MPMC with uint8, complex128, and custom _chunk type,\nenhancing test coverage and ensuring correctness of the MPMC ring\nfunctionalities.",
          "timestamp": "2023-12-19T08:05:36Z",
          "url": "https://github.com/lemon-mint/hsq/commit/be7400df6a51a4e1e514792d333d626ad03c6459"
        },
        "date": 1703038803492,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2672273,
            "unit": "ns/op",
            "extra": "2143 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 401803.91,
            "unit": "MB/s",
            "extra": "2143 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2143 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2143 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.92,
            "unit": "ns/op",
            "extra": "215518468 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "215518468 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "215518468 times\n4 procs"
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
          "id": "be7400df6a51a4e1e514792d333d626ad03c6459",
          "message": "Refactor MPMC tests and introduce new test cases\n\nAdd tests for MPMC with uint8, complex128, and custom _chunk type,\nenhancing test coverage and ensuring correctness of the MPMC ring\nfunctionalities.",
          "timestamp": "2023-12-19T08:05:36Z",
          "url": "https://github.com/lemon-mint/hsq/commit/be7400df6a51a4e1e514792d333d626ad03c6459"
        },
        "date": 1703125578147,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2727780,
            "unit": "ns/op",
            "extra": "2227 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 393627.61,
            "unit": "MB/s",
            "extra": "2227 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2227 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2227 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.01,
            "unit": "ns/op",
            "extra": "222661978 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "222661978 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "222661978 times\n4 procs"
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
          "id": "be7400df6a51a4e1e514792d333d626ad03c6459",
          "message": "Refactor MPMC tests and introduce new test cases\n\nAdd tests for MPMC with uint8, complex128, and custom _chunk type,\nenhancing test coverage and ensuring correctness of the MPMC ring\nfunctionalities.",
          "timestamp": "2023-12-19T08:05:36Z",
          "url": "https://github.com/lemon-mint/hsq/commit/be7400df6a51a4e1e514792d333d626ad03c6459"
        },
        "date": 1703211962741,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2733897,
            "unit": "ns/op",
            "extra": "2137 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 392746.89,
            "unit": "MB/s",
            "extra": "2137 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2137 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2137 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 29.9,
            "unit": "ns/op",
            "extra": "204210376 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "204210376 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "204210376 times\n4 procs"
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
          "id": "be7400df6a51a4e1e514792d333d626ad03c6459",
          "message": "Refactor MPMC tests and introduce new test cases\n\nAdd tests for MPMC with uint8, complex128, and custom _chunk type,\nenhancing test coverage and ensuring correctness of the MPMC ring\nfunctionalities.",
          "timestamp": "2023-12-19T08:05:36Z",
          "url": "https://github.com/lemon-mint/hsq/commit/be7400df6a51a4e1e514792d333d626ad03c6459"
        },
        "date": 1703298303570,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2664262,
            "unit": "ns/op",
            "extra": "2184 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 403011.93,
            "unit": "MB/s",
            "extra": "2184 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2184 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2184 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.08,
            "unit": "ns/op",
            "extra": "222149556 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "222149556 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "222149556 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T16:16:01+09:00",
          "tree_id": "10454f865dfe923fbddda147389ffa119e03ce27",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703315795441,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2937956,
            "unit": "ns/op",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 365468.27,
            "unit": "MB/s",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.76,
            "unit": "ns/op",
            "extra": "220753610 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "220753610 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "220753610 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703384784658,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2945183,
            "unit": "ns/op",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 364571.45,
            "unit": "MB/s",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.2,
            "unit": "ns/op",
            "extra": "227661878 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "227661878 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "227661878 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703471186032,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2938719,
            "unit": "ns/op",
            "extra": "2029 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 365373.32,
            "unit": "MB/s",
            "extra": "2029 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2029 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2029 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.95,
            "unit": "ns/op",
            "extra": "222341650 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "222341650 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "222341650 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703557535942,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2942589,
            "unit": "ns/op",
            "extra": "2001 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 364892.82,
            "unit": "MB/s",
            "extra": "2001 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2001 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2001 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.76,
            "unit": "ns/op",
            "extra": "207752643 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "207752643 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "207752643 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703643941925,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2909953,
            "unit": "ns/op",
            "extra": "1983 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 368985.21,
            "unit": "MB/s",
            "extra": "1983 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1983 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1983 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.15,
            "unit": "ns/op",
            "extra": "223305056 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "223305056 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "223305056 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703730341859,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2926863,
            "unit": "ns/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 366853.38,
            "unit": "MB/s",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.07,
            "unit": "ns/op",
            "extra": "229076932 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "229076932 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "229076932 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703816708225,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2915405,
            "unit": "ns/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 368295.16,
            "unit": "MB/s",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.23,
            "unit": "ns/op",
            "extra": "217965170 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "217965170 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "217965170 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703903149704,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2897419,
            "unit": "ns/op",
            "extra": "1836 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 370581.36,
            "unit": "MB/s",
            "extra": "1836 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1836 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1836 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.98,
            "unit": "ns/op",
            "extra": "221660600 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "221660600 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "221660600 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703989597864,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2974239,
            "unit": "ns/op",
            "extra": "1800 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 361009.82,
            "unit": "MB/s",
            "extra": "1800 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1800 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1800 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.79,
            "unit": "ns/op",
            "extra": "226186088 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "226186088 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "226186088 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704076076668,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 3000995,
            "unit": "ns/op",
            "extra": "1724 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 357791.23,
            "unit": "MB/s",
            "extra": "1724 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1724 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1724 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.49,
            "unit": "ns/op",
            "extra": "218186767 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "218186767 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "218186767 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704162388902,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2928780,
            "unit": "ns/op",
            "extra": "1906 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 366613.21,
            "unit": "MB/s",
            "extra": "1906 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1906 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1906 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.86,
            "unit": "ns/op",
            "extra": "223846226 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "223846226 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "223846226 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704248766843,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2909200,
            "unit": "ns/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 369080.74,
            "unit": "MB/s",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.38,
            "unit": "ns/op",
            "extra": "218257879 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "218257879 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "218257879 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704335173964,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2955370,
            "unit": "ns/op",
            "extra": "1905 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 363314.74,
            "unit": "MB/s",
            "extra": "1905 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1905 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1905 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.79,
            "unit": "ns/op",
            "extra": "204668211 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "204668211 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "204668211 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704421596636,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2929569,
            "unit": "ns/op",
            "extra": "1972 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 366514.46,
            "unit": "MB/s",
            "extra": "1972 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1972 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1972 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.11,
            "unit": "ns/op",
            "extra": "215665329 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "215665329 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "215665329 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704507951044,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 3037080,
            "unit": "ns/op",
            "extra": "1647 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 353540.11,
            "unit": "MB/s",
            "extra": "1647 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1647 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1647 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.09,
            "unit": "ns/op",
            "extra": "221141455 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "221141455 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "221141455 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704594446262,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2961928,
            "unit": "ns/op",
            "extra": "1736 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 362510.31,
            "unit": "MB/s",
            "extra": "1736 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1736 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1736 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.86,
            "unit": "ns/op",
            "extra": "206668245 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "206668245 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "206668245 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704680822836,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2888711,
            "unit": "ns/op",
            "extra": "2020 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 371698.52,
            "unit": "MB/s",
            "extra": "2020 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2020 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2020 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.83,
            "unit": "ns/op",
            "extra": "219689259 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "219689259 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "219689259 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704767227713,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2899359,
            "unit": "ns/op",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 370333.45,
            "unit": "MB/s",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.6,
            "unit": "ns/op",
            "extra": "209250364 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "209250364 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "209250364 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704853624231,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 3079218,
            "unit": "ns/op",
            "extra": "1752 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 348701.98,
            "unit": "MB/s",
            "extra": "1752 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1752 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1752 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.17,
            "unit": "ns/op",
            "extra": "218601748 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "218601748 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "218601748 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704940021917,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2893856,
            "unit": "ns/op",
            "extra": "1956 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 371037.63,
            "unit": "MB/s",
            "extra": "1956 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1956 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1956 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.12,
            "unit": "ns/op",
            "extra": "212863599 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "212863599 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "212863599 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705026439729,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2950819,
            "unit": "ns/op",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 363875.05,
            "unit": "MB/s",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 25.94,
            "unit": "ns/op",
            "extra": "222702584 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "222702584 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "222702584 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705112791324,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2942976,
            "unit": "ns/op",
            "extra": "1970 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 364844.82,
            "unit": "MB/s",
            "extra": "1970 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1970 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1970 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.15,
            "unit": "ns/op",
            "extra": "220019913 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "220019913 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "220019913 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705199259745,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2956027,
            "unit": "ns/op",
            "extra": "1912 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 363234.03,
            "unit": "MB/s",
            "extra": "1912 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1912 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1912 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.33,
            "unit": "ns/op",
            "extra": "218074852 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "218074852 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "218074852 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705285682017,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2932023,
            "unit": "ns/op",
            "extra": "2059 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 366207.7,
            "unit": "MB/s",
            "extra": "2059 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2059 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2059 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 29.03,
            "unit": "ns/op",
            "extra": "214286014 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "214286014 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "214286014 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705372019838,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2901452,
            "unit": "ns/op",
            "extra": "1984 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 370066.29,
            "unit": "MB/s",
            "extra": "1984 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1984 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1984 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.34,
            "unit": "ns/op",
            "extra": "214414016 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "214414016 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "214414016 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705458441675,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2881088,
            "unit": "ns/op",
            "extra": "2048 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 372681.99,
            "unit": "MB/s",
            "extra": "2048 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2048 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2048 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.84,
            "unit": "ns/op",
            "extra": "227683054 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "227683054 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "227683054 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705544837432,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2895443,
            "unit": "ns/op",
            "extra": "2120 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 370834.26,
            "unit": "MB/s",
            "extra": "2120 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2120 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2120 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.11,
            "unit": "ns/op",
            "extra": "227395258 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "227395258 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "227395258 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705631244729,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2855877,
            "unit": "ns/op",
            "extra": "1806 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 375971.89,
            "unit": "MB/s",
            "extra": "1806 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1806 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1806 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.89,
            "unit": "ns/op",
            "extra": "220747539 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "220747539 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "220747539 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705717603226,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2877695,
            "unit": "ns/op",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 373121.37,
            "unit": "MB/s",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.77,
            "unit": "ns/op",
            "extra": "221871847 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "221871847 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "221871847 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705804077912,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2855543,
            "unit": "ns/op",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 376015.91,
            "unit": "MB/s",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.84,
            "unit": "ns/op",
            "extra": "226012886 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "226012886 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "226012886 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705890499866,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2887102,
            "unit": "ns/op",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 371905.68,
            "unit": "MB/s",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.12,
            "unit": "ns/op",
            "extra": "220371530 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "220371530 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "220371530 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705976848005,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2874133,
            "unit": "ns/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 373583.8,
            "unit": "MB/s",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.39,
            "unit": "ns/op",
            "extra": "217214125 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "217214125 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "217214125 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1706063247539,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2881841,
            "unit": "ns/op",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 372584.63,
            "unit": "MB/s",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.31,
            "unit": "ns/op",
            "extra": "217427406 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "217427406 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "217427406 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1706149658944,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2845527,
            "unit": "ns/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 377339.38,
            "unit": "MB/s",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.88,
            "unit": "ns/op",
            "extra": "216445233 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "216445233 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "216445233 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1706235899672,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2979093,
            "unit": "ns/op",
            "extra": "1881 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 360421.67,
            "unit": "MB/s",
            "extra": "1881 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1881 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1881 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.18,
            "unit": "ns/op",
            "extra": "227302834 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "227302834 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "227302834 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1706322197041,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2935439,
            "unit": "ns/op",
            "extra": "2103 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 365781.6,
            "unit": "MB/s",
            "extra": "2103 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2103 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2103 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.98,
            "unit": "ns/op",
            "extra": "225365613 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "225365613 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "225365613 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1706408668467,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2886667,
            "unit": "ns/op",
            "extra": "2086 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 371961.72,
            "unit": "MB/s",
            "extra": "2086 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2086 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2086 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.02,
            "unit": "ns/op",
            "extra": "235920822 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "235920822 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "235920822 times\n4 procs"
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
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1706495035461,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2852492,
            "unit": "ns/op",
            "extra": "1954 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 376418.08,
            "unit": "MB/s",
            "extra": "1954 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1954 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1954 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.33,
            "unit": "ns/op",
            "extra": "228174004 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "228174004 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "228174004 times\n4 procs"
          }
        ]
      }
    ]
  }
}