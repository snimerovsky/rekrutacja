
## A co my tu mamy?

W pliku **task.ts** mamy funkcje która pobiera drzewo kategorii pewnych produktów z zewnętrznego źródła, odpowiednio je mapuje i zwraca.
Dodatkowo funkcja **categoryTree** zawiera błąd, polegający na niewłaściwym sortowaniu kategorii drugiego poziomu (szczegóły w wymaganiach do zadania).

W pliku **mockedApi.ts** znajduje się fejkowe źródło danych i tam nie ma potrzeby nic zmieniać.

## Co należy zrobić?

1. Refactor funkcji categoryTree. Wszystkie chwyty dozwolone. Dzielenie funkcji, wynoszenie zależności, zmiana parametrów wejściowych, etc... Jedyne co powinno zostać tak jak jest to że plik 
**task.ts** exportuje jedną funkcję i zwraca ona ten sam typ co przed refaktorem (lub inną funkcję która zwróci ten typ, tak tez może być.)
2. Poprawiony zostanie bug opisany poniżej.
3. W osobnym pliku przeprowadzony zostanie dowód (w postaci kodu) który jednoznacznie pokaże poprawność działania funkcji categoryTree.

> Wszystkie potrzebne paczki są już w tym repozytorium, aczkolwiek można użyć dowolnych.

## Na czym polega bug?

Dla każdej pobieranej kategorii, w parametrze **Title** moze być zawarta opcjonalna numeracja która powinna defioniować kolejność zwracaną przez funkcje (w polu **order**).
Na ten moment sortowanie działa nieprawidłowo, należy to poprawić.

> Dla wejścia znajdującego się w pliku **input.ts**, w tym momencie funkcja zwraca takie wyjście jak w pliku **currentResult.ts**. Oczekiwane wyjście zawarte jest w pliku **correctResult.ts**

## Jak używać tego repo

Najważniejsza komenda dla tego zadania to **npm run test** - buduje ona TSa i odpala testy. Ta komenda się wywali jeśli kod nie przejdzie eslinta i prettiera. Zatem żeby sprawdzić swoje zadanie należy najpierw pozbyć się błędów z eslinta i odpalić **fix:prettier**.
